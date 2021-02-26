import React from 'react';
import { Card, CardBody, CardFooter } from 'reactstrap';

const ImageList = ({ image }) => {
  
  const renderDescription = image.description && <CardFooter>{image.description.substr(0, 28)}...</CardFooter>;

  return <Card className="col-lg-2 col-md-5 col-xs-12 p-0 mb-3 ml-2" style={styles.imageCard}>
      <CardBody className="p-0">
        <img src={image.urls.thumb} alt={image.alt_description} height="100%" width="100%" />
      </CardBody>
      { renderDescription }
    </Card>;
};

const styles = {
  imageCard: {
    height: '200px'
  }
}

export default ImageList;