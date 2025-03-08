// Example using axios (Node.js or browser - requires axios library)
const axios = require('axios'); // If in Node.js

const submitTransaction = async () => {
  const url = 'http://localhost:3002/api/submitTransaction';
  const data = {
    userAddr: '0xYourUserAddress',
    fileName: 'example.pdf',
    ipfsPath: 'ipfs://your_ipfs_hash',
    activityType: 'environment-campaign',
    txId: '0xYourTxId',
    tokenAmount: 10,
    txIndexId: '1',
    status: 'pending',
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Transaction submitted:', response.data);
  } catch (error) {
    console.error('Error submitting transaction:', error);
  }
};

submitTransaction();
