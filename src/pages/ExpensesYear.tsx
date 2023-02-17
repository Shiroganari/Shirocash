import Layout from '@/layouts/Layout';
import { useParams } from 'react-router-dom';

function ExpensesYear() {
  const { id } = useParams();

  return (
    <Layout>
      <h1>Expenses Year { id }</h1>
    </Layout>
  )
}

export default ExpensesYear;
