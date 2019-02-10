// const findSmallest = ( arr ) => {
//     let smallest = arr[0];
//     let smallestIndex = 0;

//     arr.forEach( ( item, index ) => { // eslint-disable-line
//         if ( item < smallest ) {
//             smallest = item;
//             smallestIndex = index;
//         }
//     } );

//     return smallestIndex;
// };

const findSmallest = ( arr ) => {
    if ( arr.length === 0 ) {
        return arr;
    }

    const smallestEl = arr.reduce( ( prev, current ) => {
        return prev < current ? prev : current;
    } );

    return arr.indexOf( smallestEl );
};

const selectionSort = ( arr ) => {
    const iter = ( list, sortingList = [] ) => {
        if ( list.length === 0 ) {
            return sortingList;
        }

        const smallestIndex = findSmallest( list );
        const current = list.splice( smallestIndex, 1 );

        return iter( list, sortingList.concat( current ) );
    };

    return iter( arr );
};

export default selectionSort;
