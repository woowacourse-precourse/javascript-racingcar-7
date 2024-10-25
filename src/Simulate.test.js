import { processInputToOutput } from './Simulate';

test('Simulator.processInputToOutput(driverArray) test', ()=> {
    // must obtain JSON object
    expect( processInputToOutput(['p1', 'p2', 'p3+'], 3) ).toStrictEqual(
        [
            expect.objectContaining({
                'p1': expect.any(Number),
                'p2': expect.any(Number),
                'p3+': expect.any(Number),
            }),
            expect.objectContaining({
                'p1': expect.any(Number),
                'p2': expect.any(Number),
                'p3+': expect.any(Number),
            }),
            expect.objectContaining({
                'p1': expect.any(Number),
                'p2': expect.any(Number),
                'p3+': expect.any(Number),
            })
        ]
    );

});