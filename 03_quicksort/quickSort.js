export const quickSort = ( list ) => {
    if ( list.length < 2 ) {
        return list;
    }

    const [ head, ...tail ] = list;
    const less = tail.filter( item => item < head );
    const greater = tail.filter( item => item >= head );

    return [ ...quickSort( less ), head, ...quickSort( greater ) ];
};
