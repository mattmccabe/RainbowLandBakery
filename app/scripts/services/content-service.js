'use strict';

angular.module('rlbApp')
  .service('ContentService', function ContentService() {
    var sections = [
    		{
            	id: 'food',
                label: 'Food',
                desc: '',
                iconClass: 'fa-cutlery',
                path: 'food'
            },
            {
            	id: 'crafts',
                label: 'Crafts',
                desc: '',
                iconClass: 'fa-scissors',
                path: 'crafts'
            },
            {
            	id: 'fun',
                label: 'Fun',
                iconClass:'fa-thumbs-up',
                path: 'fun'
            }
        ];

        var recipeContent = {
        	categories: ['Drinks', 'Foods', 'Healthy Foods', 'Desserts', 'Frostings']

        };

        var craftContent = {
        	categories: ['Coloring', 'Painting', 'Stickers', 'My World']

        };
        var funContent = {
        	categories: ['Indoor', 'Outdoor']
        };

        var subSections = {
        	'food' : recipeContent,
        	'crafts' : craftContent,
        	'fun' : funContent
        };

        var getSections = function () {
            return sections;
        }

        var getSubSections = function(parent)
        {
        	return subSections[parent.id];
        }

        return {
            getSections: getSections,
            getSubSections: getSubSections
        };
  });
