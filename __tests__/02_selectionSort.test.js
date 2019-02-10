import selectionSort from '../02_selectionSort';

test( 'selectionSort', () => {
    const list = [100, 0, 1, 3, -1, 0 ];
    const sortedList = [ -1, 0, 0, 1, 3, 100 ];

    expect( selectionSort( list ) ).toEqual( sortedList );
} );

test( 'selectionSort empty list', () => {
    expect( selectionSort( [] ) ).toEqual( [] );
} );
