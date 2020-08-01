import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.formTitle}>
      Find contacts by name
      <input
        className={styles.formInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
