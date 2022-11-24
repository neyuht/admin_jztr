function Select({ datas, value, name, onChange }) {
  const _datas = datas || [];
  const props = {
    value,
    onChange: (e) => {
      onChange(e);
    },
  };
  return (
    <select name={name} id={name} {...props}>
      {_datas.map((item) => (
        <option value={`${item.value || item.title}`}>{item.title}</option>
      ))}
    </select>
  );
}

export default Select;
