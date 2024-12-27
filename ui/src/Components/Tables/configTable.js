import { Tag } from "antd";

export const AllPropertyTableConfig = [
 {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  sorter: {
   compare: (a, b) => a.address.localeCompare(b.address),
   multiple: 1,
 },
},
{
  title: 'City',
  dataIndex: 'city',
  key: 'city',
  sorter:{
    compare: (a, b) => a.city.localeCompare(b.city),
    multiple: 2
  }
},
{
  title: 'Town',
  dataIndex: 'town',
  key: 'town',
  sorter:{
    compare: (a, b) => a.town.localeCompare(b.town),
    multiple: 3
  }
},
{
  title: 'State',
  dataIndex: 'state',
  key: 'state',
  sorter: {
    compare: (a, b) => a.state.localeCompare(b.state),
    multiple: 4
  },
},
{
  title: 'Pincode',
  dataIndex: 'pincode',
  key: 'pincode',
  sorter: {
    compare: (a, b) => a.pincode - b.pincode,
    multiple: 5
  },
},
{
  title: 'Owner Name',
  dataIndex: ['ownerId', 'fullName'],
  key: 'ownerName',
  render: (text, record) => `${record.ownerId.firstName} ${record.ownerId.lastName}`,
  sorter:{
    compare: (a, b) => a.ownerId.fullName.localeCompare(b.ownerId.fullName),
    multiple: 6
  }
},
{
  title: 'Owner Email',
  dataIndex: ['ownerId', 'email'],
  key: 'ownerEmail',
  sorter: {
    compare: (a, b) => a.ownerId.email.localeCompare(b.ownerId.email),
    multiple: 7
  },
},
{
  title: 'Active Status',
  dataIndex: 'isActive',
  key: 'isActive',
  render: (text)=> text ? <Tag color="green">Active</Tag> : <Tag color="yellow">Inactive</Tag>,
},
{
  title: 'Created At',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: (text) => new Date(text).toLocaleString(),
  sorter:{
    compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    multiple: 8
  }
},
{
  title: 'Updated At',
  dataIndex: 'updatedAt',
  key: 'updatedAt',
  render: (text) => new Date(text).toLocaleString(),
  sorter:{
    compare: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    multiple: 9
  }
},
]