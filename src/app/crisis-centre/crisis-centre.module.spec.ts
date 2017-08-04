import { CrisisCentreModule } from './crisis-centre.module';

describe('CrisisCentreModule', () => {
  let crisisCentreModule: CrisisCentreModule;

  beforeEach(() => {
    crisisCentreModule = new CrisisCentreModule();
  });

  it('should create an instance', () => {
    expect(crisisCentreModule).toBeTruthy();
  });
});
