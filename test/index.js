import sinonChai from 'sinon-chai';
import chai from 'chai';
import sinon from 'sinon';

chai.use(sinonChai);

// define testing globals
global.sinon = sinon;
global.expect = chai.expect;
