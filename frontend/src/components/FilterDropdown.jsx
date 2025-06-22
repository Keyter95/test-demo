function FilterDropdown({ selectedValue, handleChange }) {
  return (
    <div>
      <label htmlFor="my-dropdown">Filter Policy Movements By:</label>
      <select id="my-dropdown" value={selectedValue} onChange={handleChange}>
        <option value="">Default</option>
        <option value="workflows">Workflows</option>
        <option value="transactions">Transactions</option>
        <option value="claims">Claims</option>
        <option value="movements">Policy Movements</option>
        <option value="timeline">Timeline Events</option>
        <option value="status">Status History</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
