const mimTypes = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    webp: 'image/webp',

  };
  
async function createFile(url){
    const response = await fetch(url);
    const data = await response.blob();
    const fileType = url.split('.').pop();
    const metadata = {
      type: mimTypes[fileType] || 'image/jpeg',
    };
    return new File([data], url, metadata);
  }

  export default createFile