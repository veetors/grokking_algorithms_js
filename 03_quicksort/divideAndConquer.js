const coll = [2, 0, 12, 33, -1];

export const sum = ( list ) => {
    if ( list.length === 0 ) {
        return 0;
    }

    const [head, ...tail] = list;

    return head + sum( tail );
};

sum( coll ); // => 46

export const count = ( list ) => {
    if ( list.length === 0 ) {
        return 0;
    }

    const tail = list.slice( 1 );

    return 1 + count( tail );
};

count( coll ); // => 5

export const getGreatest = ( list ) => {
    if ( list.length === 1 ) {
        return list[0];
    }

    const [ first, second, ...tail ] = list;
    const newList = first > second ? [ first, ...tail ] : [ second, ...tail ];

    return getGreatest( newList );
};

getGreatest( coll ); // => 33
