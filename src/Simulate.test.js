import process from './Simulate';

test('Simulator.process(driverArray) test', ()=> {
    // must obtain JSON object
    expect(process(['p1', 'p2', 'p3+'])).toStrictEqual(
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
            }),
        ]
    );

});