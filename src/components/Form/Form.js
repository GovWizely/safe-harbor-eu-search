import cx from 'classnames';
import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import Select from 'react-select';
import { isEmpty, map, trim } from '../../utils/lodash';
import countryList from '../../fixtures/countries';
import sourceList from '../../fixtures/sources';
import './Form.scss';

const TextField = ({ description, input, label, meta: { error } }) => (
  <div className={cx('explorer__form__group', { 'explorer__form__group--error': !!error })}>
    <label htmlFor={input.name}>{label}</label>
    {description ? <p>{description}</p> : null}
    <input type="text" className="explorer__form__input" id={input.name} {...input} />
    {(error && <span className="explorer__form__message">{error}</span>)}
  </div>
);
TextField.propTypes = {
  description: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object,
};

const onSelectFn = (onChange) => ({
  false: (value) => onChange(value['value']),
  true:  (values) => onChange(map(values, 'value')),
});
const SelectField = ({ description, input, label = 'Untitled', name, options, multi = false }) => (
  <div className="explorer__form__group">
    <label htmlFor={name}>{label}</label>
    {description ? <p>{description}</p> : null}
    <div>
      <Select
        {...input}
        options={options}
        multi={multi} autoBlur
        onBlur={() => input.onBlur(input.value)}
        onChange={onSelectFn(input.onChange)[multi]}
      />
    </div>
  </div>
);
SelectField.propTypes = {
  description: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  multi: PropTypes.bool,
};

const Form = ({
  error, handleSubmit, formOptions
}) => (
  <form className="explorer__form" onSubmit={handleSubmit}>
    <fieldset>
      <Field
        component={TextField} name="q" label="Keyword"
        description="Search by the organization name, contact name, corporate officer, zip code, or industry sector."
      />

      <Field
        component={SelectField} name="stateName" label="Filter by State" options={formOptions.state_names} multi
        description=""
      />
      <div className="explorer__form__group">
        <button className="explorer__form__submit pure-button pure-button-primary" onClick={handleSubmit} disabled={!!error}>
          <i className="fa fa-paper-plane" /> Search
        </button>
      </div>
    </fieldset>
  </form>
);
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'form',
})(Form);
