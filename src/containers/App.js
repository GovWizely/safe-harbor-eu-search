import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { stringify } from 'querystring';
import { assign, camelCase, isEmpty, omitBy, reduce, snakeCase } from '../utils/lodash';
import { Form, Result, Spinner } from '../components';
import { fetchResultsIfNeeded, requestFormOptions } from '../actions';
import './App.scss';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(requestFormOptions());
  }

  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(fetchResultsIfNeeded(query));
  }
  handlePaging = (e) => {
    e.preventDefault();
    if (!e.target.dataset.page) return;

    const { dispatch, query } = this.props;
    const offset = (parseInt(e.target.dataset.page, 10) - 1) * 10;
    const params = assign({}, omitBy(query, isEmpty), { offset });
    dispatch(fetchResultsIfNeeded(params));
    this.push(params);
  }
  handleSubmit = (form) => {
    const params = reduce(omitBy(form, isEmpty), (result, value, _key) => {
      const key = snakeCase(_key);
      return assign(
        result, { [key]: Array.isArray(value) ? value.join(',') : value });
    }, {});
    this.props.dispatch(fetchResultsIfNeeded(params));
    this.push(params);
  }
  push(params) {
    this.props.history.push(`?${stringify(params)}`);
  }
  render() {
    const { query, results, form_options } = this.props;
    const formValues = reduce(
      query,
      (result, value, key) => assign(result, { [camelCase(key)]: value }),
      {});
    return (
      <div className="explorer">
        <h1 className="Header-1"><b>Search the U.S.-EU Safe Harbor List</b></h1>
        <p className="DefaultParagraph-1">

        <h3>Advisory:</h3>

        <h3>U.S.-EU Safe Harbor</h3>
        <p>
          On October 6, 2015, the European Court of Justice issued a <a href="http://curia.europa.eu/juris/document/document.jsf?text=&docid=169195&pageIndex=0&doclang=EN&mode=req&dir=&occ=first&part=1&cid=125031">judgment</a> declaring as “invalid” the European Commission’s Decision 2000/520/EC of 26 July 2000 “on the adequacy of the protection provided by the safe harbour privacy principles and related frequently asked questions issued by the US Department of Commerce.” As a result of that decision, the U.S.-EU Safe Harbor Framework is not a valid mechanism to comply with EU data protection requirements when transferring personal data from the European Union to the United States.
        </p>
        <p>
        On July 12, 2016, U.S. Secretary of Commerce Penny Pritzker joined European Union Commissioner Věra Jourová to announce the approval of the EU-U.S. Privacy Shield Framework as a valid legal mechanism to comply with EU requirements when transferring personal data from the European Union to the United States. The EU-U.S. Privacy Shield Framework replaces the U.S.-EU Safe Harbor Framework. The Department began accepting certifications on August 1, 2016.
        </p>
        <p>
          As of October 31, 2016, the Department stopped accepting all U.S.-EU Safe Harbor certifications. The Department will maintain the <a href="https://safeharbor.export.gov/list.aspx">U.S.-EU Safe Harbor List</a> of participants.
        </p>
        <h3>
          U.S.-Swiss Safe Harbor
        </h3>
        <p>
          On January 12, 2017, Swiss Federal Councillor Johann Schneider-Ammann announced the approval of the Swiss-U.S. Privacy Shield Framework as a valid legal mechanism to comply with Swiss requirements when transferring personal data from Switzerland to the United States. The Swiss-U.S. Privacy Shield Framework will immediately replace the U.S.-Swiss Safe Harbor. To give organizations the time needed to review the Privacy Shield Principles and the commitments they entail, U.S. Acting Under Secretary of Commerce Ken Hyatt announced that the Department will begin accepting Privacy Shield certifications on April 12, 2017.
        </p>
        <p>
          Beginning April 12, 2017, the Department of Commerce will no longer accept any U.S.-Swiss Safe Harbor certifications. The Department will maintain the <a href="https://safeharbor.export.gov/swisslist.aspx">U.S.-Swiss Safe Harbor List</a> of participants.
        </p>
        <p>
          Please note that, pursuant to the Safe Harbor Frequently Asked Question on Self-Certification, the commitment to adhere to the U.S.-EU and U.S.-Swiss Safe Harbor Principles is not time-limited, and a participating organization must continue to apply the Principles to data received under the Safe Harbor.
        </p>
        <p>
          For more information on the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework, please visit <a href="https://www.privacyshield.gov/">https://www.privacyshield.gov</a>
        </p>
        <ul>
          <li>
            The organizations on this list have notified the Department of Commerce that they adhere to the U.S.-EU Safe Harbor Framework developed by the Department of Commerce in coordination with the European Commission. The U.S.-EU Safe Harbor Framework provides guidance for U.S. organizations on how to provide adequate protection for personal data from the EU as required by the European Union's Directive on Data Protection.
          </li>
          <li>
            An organization's self-certification of compliance with the U.S.-EU Safe Harbor Framework and the appearance of the organization on this list pursuant to the self-certification, constitute an enforceable representation to the Department of Commerce and the public that it adheres to a privacy policy that complies with the U.S.-EU Safe Harbor Framework.
          </li>
          <li>
            There are benefits to organizations that participate in the U.S.-EU Safe Harbor program, but participation in the U.S.-EU Safe Harbor Framework and self-certification to the list are voluntary. Once an entity elects to participate in the program, it is legally required to comply with the Safe Harbor Privacy Principles. An organization's absence from the list does not mean that it does not provide effective protection for personal data or that it does not qualify for the benefits of the U.S.-EU Safe Harbor program. In order to keep this list current, a notification will be effective for a period of twelve months; therefore, organizations must notify the Department of Commerce every twelve months to reaffirm their continued adherence to the U.S.-EU Safe Harbor Framework.
          </li>
          <li>
            Organizations should notify the Department of Commerce if their representation to the Department is no longer valid. Failure by an organization to so notify the Department could constitute a misrepresentation.
          </li>
          <li>
            An organization may withdraw from the list at any time by notifying the Department of Commerce. Withdrawal from the list terminates the organization's representation of adherence to the U.S.-EU Safe Harbor Framework, but this does not relieve the organization of its Safe Harbor obligations with respect to personal information received during the time that the organization was on the U.S.-EU Safe Harbor list.
          </li>
          <li>
            If a relevant self-regulatory or government enforcement body finds that an organization has engaged in a persistent failure to comply with the U.S.-EU Safe Harbor Privacy Principles, then that organization is no longer entitled to the benefits of the U.S.-EU Safe Harbor program. In this case, the organization must promptly notify the Department of Commerce of such facts either by email or letter. Failure to do so may be actionable under the False Statements Act (18 U.S.C. 1001). That organization must also provide the Department of Commerce with a copy of the decision letter from the relevant self-regulatory or government enforcement body.
          </li>
          <li>
            In maintaining the list, the Department of Commerce does not assess and makes no representations to the adequacy of any organization's privacy policy or its adherence to that policy. Furthermore, the Department of Commerce does not guarantee the accuracy of the list and assumes no liability for the erroneous inclusion, misidentification, omission, or deletion of any organization, or any other action related to the maintenance of the list.
          </li>
        </ul>

        </p>

        <div className="explorer__content">
          <Form onSubmit={this.handleSubmit} initialValues={formValues} formOptions={form_options}/>
          <Spinner active={results.isFetching} />
          <Result results={results} onPaging={this.handlePaging} query={query} />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  results: PropTypes.object,
  form_options: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const query = ownProps.history.getCurrentLocation().query;
  const { results, form_options } = state;
  return {
    query,
    results,
    form_options
  };
}

export default connect(mapStateToProps)(App);
