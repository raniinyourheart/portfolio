/*===================================
FILTER UTILITY
===================================*/

class Filter {

    static filter(items, category, key = "category") {

        if (!category || category === "All") {

            return items;

        }

        return items.filter(

            (item) => item[key] === category

        );

    }

    static unique(items, key = "category") {

        return [

            "All",

            ...new Set(

                items.map(

                    (item) => item[key]

                )

            )

        ];

    }

    static sort(items, key = "year", order = "desc") {

        return [...items].sort((a, b) => {

            if (order === "asc") {

                return a[key] > b[key] ? 1 : -1;

            }

            return a[key] < b[key] ? 1 : -1;

        });

    }

}

export default Filter;