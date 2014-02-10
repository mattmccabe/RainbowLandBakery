'use strict';

angular.module('rlbApp')
  .service('ContentService', function ContentService() {
    var sections = {
            'recipes': {
                label: 'Food',
                desc: '',
                iconClass: 'fa-cutlery'
            },
            'crafts': {
                label: 'Crafts',
                desc: '',
                iconClass: ''
            },
            'fun': {
                label: 'Fun',
                desc:'icon-rocket'
            }
        };

        var recipeContent = {
        	categories: ['Drinks', 'Foods', 'Healthy Foods', 'Desserts', 'Frostings']

        };

        var craftContent = {
        	categories: ['Coloring', 'Painting', 'Stickers', 'My World']

        };
        var funContent = {
        	categories: ['Indoor', 'Outdoor']
        };

        var subSection = {
        	'recipes' : recipeContent,
        	'crafts' : craftContent,
        	'fun' : funContent
        };

        var getSection = function () {
            return content;
        }

        var getSubSection = function(parent)
        {
        	return subContent[contentName];
        }

        return {
            getContent: getContent,
            getSubContent: getSubContent
        };
  });
