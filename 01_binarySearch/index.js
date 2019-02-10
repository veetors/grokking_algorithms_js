// const binarySearch = ( items, item, low = 0, high = items.length - 1 ) => {
//     if ( low > high ) {
//         return null;
//     }

//     const mid = Math.ceil( ( low + high ) / 2 );
//     const guess = items[mid];

//     if ( item === guess ) {
//         return mid;
//     }

//     const newLow  = guess > item ? low : mid + 1;
//     const newHigh = guess > item ? mid - 1 : high;

//     return binarySearch( items, item, newLow, newHigh );
// };

const binarySearch = ( items, item ) => {
    let low = 0;
    let high = items.length - 1;

    while ( low <= high ) {
        const mid = Math.ceil( ( low + high ) / 2 );
        const guess = items[mid];

        if ( guess === item ) {
            return mid;
        }

        if ( guess > item ) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return null;
};

export default binarySearch;
