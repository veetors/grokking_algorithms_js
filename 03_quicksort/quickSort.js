export const quickSort = ( list ) => {
    if ( list.length < 2 ) {
        return list;
    }

    const [ head, ...tail ] = list;
    const less = tail.filter( item => item < head );
    const greater = tail.filter( item => item >= head );

    return [ ...quickSort( less ), head, ...quickSort( greater ) ];
};

quickSort( [ 2, 0, 10, -1, 0, 8, 123, -978 ] ); // => [ -978, -1, 0, 0, 2, 8, 10, 123 ]
