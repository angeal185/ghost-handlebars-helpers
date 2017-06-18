// # Ghost Head Helper
// Usage: `{{ghost_head_convert}}`
//
// Output for static site conversion.


var getMetaData = require('../../data/meta'),
    hbs = require('express-hbs'),
    escapeExpression = hbs.handlebars.Utils.escapeExpression,
    SafeString = hbs.handlebars.SafeString,
    _ = require('lodash'),
    filters = require('../../filters'),
    config = require('../../config'),
    Promise = require('bluebird'),
    api = require('../../api');

	

function writeMetaTag(property, content, type) {
    type = type || property.substring(0, 7) === 'twitter' ? 'name' : 'property';
    return '<meta ' + type + '="' + property + '" content="' + content + '" />';
}

function finaliseStructuredData(metaData) {
    var head = [];
    _.each(metaData.structuredData, function (content, property) {
        if (property === 'article:tag') {
            _.each(metaData.keywords, function (keyword) {
                if (keyword !== '') {
                    keyword = escapeExpression(keyword);
                    head.push(writeMetaTag(property,
                        escapeExpression(keyword)));
                }
            });
            head.push('');
        } else if (content !== null && content !== undefined) {
            head.push(writeMetaTag(property,
                escapeExpression(content)));
        }
    });
    return head;
}

function ghost_head_convert(options) {
    if (this.statusCode >= 400) {
        return;
    }
    var metaData,
        client,
        head = [],
        context = this.context ? this.context : null,
        useStructuredData = !config.isPrivacyDisabled('useStructuredData'),
        safeVersion = this.safeVersion,
        referrerPolicy = config.referrerPolicy ? config.referrerPolicy : 'no-referrer-when-downgrade',
        fetch = {metaData: getMetaData(this, options.data.root)};

    return Promise.props(fetch).then(function (response) {
        metaData = response.metaData;

            // head is our main array that holds our meta data
            head.push('<link rel="canonical" href="' +
                escapeExpression(metaData.canonicalUrl) + '" />');
            head.push('<meta name="referrer" content="' + referrerPolicy + '" />');

            // show amp link in post when 1. we are not on the amp page and 2. amp is enabled
            if (_.includes(context, 'post') && !_.includes(context, 'amp') && config.theme.amp) {
                head.push('<link rel="amphtml" href="' +
                    escapeExpression(metaData.ampUrl) + '" />');
            }

            if (metaData.previousUrl) {
                head.push('<link rel="prev" href="' +
                    escapeExpression(metaData.previousUrl) + '" />');
            }

            if (metaData.nextUrl) {
                head.push('<link rel="next" href="' +
                    escapeExpression(metaData.nextUrl) + '" />');
            }

            if (!_.includes(context, 'paged') && useStructuredData) {
                head.push('');
                head.push.apply(head, finaliseStructuredData(metaData));
                head.push('');

                if (metaData.schema) {
                    head.push('<script type="application/ld+json">\n' +
                        JSON.stringify(metaData.schema, null, '    ') +
                        '\n    </script>\n');
                }
            }


        head.push('<link rel="alternate" type="application/rss+xml" title="' +
            escapeExpression(metaData.blog.title)  + '" href="' +
            escapeExpression(metaData.rssUrl) + '" />');

        return api.settings.read({key: 'ghost_head'});
    }).then(function (response) {
        if (!_.includes(context, 'amp')) {
            head.push(response.settings[0].value);
        }
        return filters.doFilter('ghost_head', head);
    }).then(function (head) {
        return new SafeString(head.join('\n    ').trim());
    });
}

module.exports = ghost_head_convert;
