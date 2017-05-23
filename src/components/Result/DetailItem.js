import { compact, get, isEmpty, map } from '../../utils/lodash';
import React, { PropTypes } from 'react';

const isValidArray = (value) => (value && Array.isArray(value) && value.length);
const isValidChildren = (value) => {
  if (typeof value === 'number' || typeof value === 'boolean') return true;

  if (isEmpty(value)) return false;

  if (typeof value.type === 'function' && isEmpty(get(value, ['props', 'value']))) return false;

  return true;
};

const Link = ({ value }) => <a href={value}>{value}</a>;
Link.propTypes = { value: PropTypes.string.isRequired };

const ListItem = ({ value }) => (value ? <li>{value}</li> : null);
ListItem.propTypes = { value: PropTypes.string };

const AddressList = ({ value }) => {
  if (!isValidArray(value)) return null;

  const items = compact(map(value, (item, i) => !isEmpty(item) && (
    <li key={i}>
      <ul>
        <ListItem value={item.address} />
        <ListItem value={item.city} />
        <ListItem value={item.state} />
        <ListItem value={item.postal_code} />
        <ListItem value={item.country} />
      </ul>
    </li>
  )));
  if (isEmpty(items)) return null;

  return <ol className="explorer__result-item__addresses">{items}</ol>;
};
AddressList.propTypes = { value: PropTypes.array };

const IdentificationList = ({ value }) => {
  if (!isValidArray(value)) return null;

  const items = compact(map(value, (item, i) => !isEmpty(item) && (
    <li key={i}>
      <table>
        <tbody>
          <Row label="Type:">{item.type}</Row>
          <Row label="Number:">{item.number}</Row>
          <Row label="Country:">{item.country}</Row>
          <Row label="Issue Date:">{item.issue_date}</Row>
          <Row label="Expiration Date:">{item.expiration_date}</Row>
        </tbody>
      </table>
    </li>
  )));
  if (isEmpty(items)) return null;

  return <ol className="explorer__result-item__identifications">{items}</ol>;
};
IdentificationList.propTypes = { value: PropTypes.array };

const UnorderedList = ({ value }) => {
  if (!isValidArray(value)) return null;

  const items = compact(map(value, (item, i) => !isEmpty(value) && (
    <ListItem key={i} value={item} />
  )));
  if (isEmpty(items)) return null;
  return <ul>{items}</ul>;
};
UnorderedList.propTypes = { value: PropTypes.array };

const Row = ({ label, children }) => {
  if (!isValidChildren(children)) return null;

  return (
    <tr>
      <td>{label}</td>
      <td>{children}</td>
    </tr>
  );
};
Row.propTypes = { label: PropTypes.string.isRequired, children: PropTypes.any };

export {
  AddressList,
  IdentificationList,
  Link,
  ListItem,
  Row,
  UnorderedList,
};
