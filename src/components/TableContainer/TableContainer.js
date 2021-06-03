import React from 'react';
import { Table } from 'antd';
import { useUserData } from '../../userDataContext';
import { months } from '../../utils';
import './TableContainer.css';

const TableContainer = () => {
  const {visibleUsers} = useUserData();
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (a) => (<>{months[a]}</>),
      sorter: (a, b) => a.birthday - b.birthday,
    },
    {
      title: 'Spend',
      dataIndex: 'spend',
      key: 'spend',
      sorter: (a, b) => a.spend - b.spend,
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      sorter: (a, b) => a.region - b.region,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a, b) => a.gender - b.gender,
    },
  ];

  return (
    <div className='c-TableContainer'>
      <Table
        columns={columns} 
        dataSource={visibleUsers}
        rowKey={(row) => row.id}
      />
    </div>
  )
}

export default TableContainer;