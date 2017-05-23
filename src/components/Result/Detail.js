import React, { PropTypes } from 'react';
import { AddressList, IdentificationList, Link, Row, UnorderedList } from './DetailItem';

const Detail = ({ result }) => (
  <table className="explorer__result-item__detail">
    <tbody>
      <Row label="Company">{result.company}</Row>
      <Row label="Registration Number">{result.registration_number}</Row>
      <Row label="Username">{result.username}</Row>
      <Row label="Address">{result.address}</Row>
      <Row label="City">{result.city}</Row>
      <Row label="State Name">{result.state_name}</Row>
      <Row label="ZIP">{result.zip}</Row>
      <Row label="Phone">{result.phone}</Row>
      <Row label="Fax">{result.fax}</Row>
      <Row label="Website">
        <Link value={result.website} />
      </Row>

      <Row label="Contact Office">{result.contact_office}</Row>
      <Row label="Contact Name">{result.contact_name}</Row>
      <Row label="Contact Title">{result.contact_title}</Row>
      <Row label="Contact Phone">{result.contact_phone}</Row>
      <Row label="Contact Fax">{result.contact_fax}</Row>
      <Row label="Contact Email">{result.contact_email}</Row>

      <Row label="Corporation Officer">{result.corp_officer}</Row>
      <Row label="Corporation Officer Title">{result.corp_officer_title}</Row>
      <Row label="Corporation Officer Phone">{result.corp_officer_phone}</Row>
      <Row label="Corporation Officer Fax">{result.corp_officer_fax}</Row>
      <Row label="Corporation Officer Email">{result.corp_officer_email}</Row>

      <Row label="PP Effective Date">{result.pp_effective_date}</Row>
      <Row label="PP Location">
        <Link value={result.pp_location} />
      </Row>
      <Row label="Statutory Description">{result.statutory_desc}</Row>
      <Row label="Verification Method">{result.verification_method}</Row>
      <Row label="Personal Data">{result.personal_data}</Row>
      <Row label="HR Data">{result.hr_data}</Row>
      <Row label="EU Data Protection">{result.eu_data_protection}</Row>
      <Row label="EU Countries">
        <UnorderedList value={result.eu_countries} />
      </Row>

      <Row label="Industry Sector 1">{result.industry_sector_1}</Row>
      <Row label="Industry Sector 2">{result.industry_sector_2}</Row>
      <Row label="Industry Sector 3">{result.industry_sector_3}</Row>
      <Row label="Industry Sector 4">{result.industry_sector_4}</Row>

      <Row label="Sales Amount">{result.sales_amount}</Row>
      <Row label="Emp Range">{result.emp_range}</Row>
      <Row label="Status">{result.status}</Row>
      <Row label="Certification Status Description">{result.cert_status_desc}</Row>
      <Row label="Certification Date">{result.certification_date}</Row>
      <Row label="Annual Renewal Date">{result.annual_renewal_date}</Row>
      <Row label="EU Certified Through">{result.eu_certified_through}</Row>
      <Row label="Last Renewed Date">{result.last_renewed_date}</Row>
      <Row label="Next Notification Date">{result.next_notification_date}</Row>
    </tbody>
  </table>
);
Detail.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Detail;
