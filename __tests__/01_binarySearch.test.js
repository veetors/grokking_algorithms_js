import binarySearch from '../01_binarySearch';

test( 'binarySearch', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //eslint-disable-line
    const item = 5;
    const index = binarySearch( list, item );

    expect( index ).toBe( 4 );
} );

test( 'binarySearch null', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //eslint-disable-line
    const item = 20;
    const index = binarySearch( list, item );

    expect( index ).toBeNull();
} );
