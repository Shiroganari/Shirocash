import Layout from '@/layouts/Layout';
import { useParams } from 'react-router-dom';

function ExpensesMonth() {
  const { id } = useParams();

  return (
    <Layout>
      <h1>Expenses Month { id }</h1>
    </Layout>
  )
}

export default ExpensesMonth;
