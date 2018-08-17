const UUID = require('uuid-js');
const uuid = () => UUID.create().hex;
export default uuid;
