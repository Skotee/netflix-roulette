import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => { 
	return React.createElement('h4', null, `Hello World, ${name}!`); 
}; 

Greeting.propTypes = {
	name: PropTypes.string
};

export default Greeting;