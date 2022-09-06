import Pagination from "react-bootstrap/Pagination";

const ItemsPagination = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return items;
};
const items = ItemsPagination();
export { items };
