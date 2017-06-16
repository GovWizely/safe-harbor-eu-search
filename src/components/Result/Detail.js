import React, { PropTypes } from 'react';
import { AddressList, IdentificationList, Link, Row, UnorderedList } from './DetailItem';
import moment from 'moment';

const Detail = ({ result }) => (
  <table className="explorer__result-item__detail">
    <tbody>
      <Row label="Organization">{result.company}</Row>
      <Row label="Address">{result.address}</Row>
      <Row label="City">{result.city}</Row>
      <Row label="State Name">{result.state_name}</Row>
      <Row label="Zip Code">{result.zip}</Row>
      <Row label="Phone">{result.phone}</Row>
      <Row label="Fax">{result.fax}</Row>
      <Row label="Website">
        <Link value={result.website} />
      </Row>

      <Row label="Organization Contact Office">{result.contact_office}</Row>
      <Row label="Organization Contact Name">{result.contact_name}</Row>
      <Row label="Organization Contact Title">{result.contact_title}</Row>
      <Row label="Organization Contact Phone">{result.contact_phone}</Row>
      <Row label="Organization Contact Fax">{result.contact_fax}</Row>
      <Row label="Organization Contact Email">{result.contact_email}</Row>

      <Row label="Corporate Officer">{result.corp_officer}</Row>
      <Row label="Corporate Officer Title">{result.corp_officer_title}</Row>
      <Row label="Corporate Officer Phone">{result.corp_officer_phone}</Row>
      <Row label="Corporate Officer Fax">{result.corp_officer_fax}</Row>
      <Row label="Corporate Officer Email">{result.corp_officer_email}</Row>

      <Row label="Privacy Policy Effective Date">{moment(result.pp_effective_date).format('MM-DD-YYYY')}</Row>
      <Row label="Privacy Policy Location">
        <Link value={result.pp_location} />
      </Row>
      <Row label="Regulated By">{result.statutory_desc}</Row>
      <Row label="Verification Method">{result.verification_method}</Row>
      <Row label="Personal Data Covered">{result.personal_data}</Row>
      <Row label="Organization Human Resources Data Covered">{result.hr_data}</Row>
      <Row label="Agreement to Cooperate and Comply with EU and/or Swiss Data Protection Authorities">{result.eu_data_protection}</Row>
      <Row label="Relevant Countries from which Personal Information Received">
        <UnorderedList value={result.eu_countries} />
      </Row>

      <Row label="Industry Sector 1">{result.industry_sector_1}</Row>
      <Row label="Industry Sector 2">{result.industry_sector_2}</Row>
      <Row label="Industry Sector 3">{result.industry_sector_3}</Row>
      <Row label="Industry Sector 4">{result.industry_sector_4}</Row>

      <Row label="Original Certification Date">{moment(result.certification_date).format('MM-DD-YYYY')}</Row>
      <Row label="EU Certified Through">{moment(result.eu_certified_through).format('MM-DD-YYYY')}</Row>
    </tbody>
  </table>
);
Detail.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Detail;
