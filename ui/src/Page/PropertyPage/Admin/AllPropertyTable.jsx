import React, { useEffect, useState } from 'react';
import ConfigTable from '../../../Components/Tables/ConfigTable';
import { AllPropertyTableConfig } from '../../../Components/Tables/configTable';
import axiosInstance from '../../../util/axiosInstance';

const AllPropertyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axiosInstance.get('/property/all');
        setData(res.data.data || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <ConfigTable columns={AllPropertyTableConfig} data={data} />
    </div>
  );
};

export default AllPropertyTable;
