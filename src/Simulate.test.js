import { processInputToOutput } from './Simulate';

test('Simulator.processInputToOutput(driverArray) test', ()=> {
    // must obtain JSON object
    expect( processInputToOutput(['p1', 'p2', 'p3+'], 3) ).toStrictEqual(
        [
            expect.objectContaining({
                name: 'p1',
                phase: expect.any(Array),
            }),
            expect.objectContaining({
                name: 'p2',
                phase: expect.any(Array),
            }),
            expect.objectContaining({
                name: 'p3+',
                phase: expect.any(Array),
            })
        ]
    );

});