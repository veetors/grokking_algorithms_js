import { sum, count, getGreatest, quickSort } from '../03_quickSort';

describe( 'divideAndConquer', () => {
    const list = [2, 0, 12, 33, -1]; // eslint-disable-line

    it( 'sum', () => {
        const result = 46;

        expect( sum( list ) ).toBe( result );
    } );

    it( 'count', () => {
        const result = 5;

        expect( count( list ) ).toBe( result );
    } );

    it( 'count empty list', () => {
        const result = 0;

        expect( count( [] ) ).toBe( result );
    } );

    it( 'getGreatest', () => {
        const result = 33;

        expect( getGreatest( list ) ).toBe( result );
    } );
} );

describe( 'quickSort', () => {
    const list = [ 2, 0, 10, -1, 0, 8, 123, -978 ]; // eslint-disable-line

    it( 'quickSort empty list', () => {
        expect( quickSort( [] ) ).toEqual( [] );
    } );

    it( 'quickSort list.length < 2', () => {
        expect( quickSort( [3] ) ).toEqual( [3] );
    } );

    it( 'quickSort list.length > 2', () => {
        const result = [ -978, -1, 0, 0, 2, 8, 10, 123 ]; // eslint-disable-line

        expect( quickSort( list ) ).toEqual( result );
    } );
} );
