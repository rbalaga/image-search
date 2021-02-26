import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row } from 'reactstrap';
import ImageList from './components/ImageList';
import Header from './helper/Header';
import { fetchImages } from './redux/actions';

function App(props) {

  const [imageTag, setImageTag] = useState('');
  const [pageCnt, setPageCnt] = useState(1);
  
  const changeImageTag = (e) => {
    if (e.key === 'Enter') {
      const imageKey = e.target.value;
      setImageTag(imageKey);
      props.fetchImages(imageKey, 1);
      setPageCnt(2);
    }
  }
  const loadMore = () => {
    props.fetchImages(imageTag, pageCnt);
    setPageCnt(pageCnt+1);
  }

  const renderImageList = props.images.map((img, idx) => <ImageList key={img.id} image={img} />);

  const renderLoadMoreButton = ((props.pages * 10 - props.images.length) >= 10) && props.pages &&
    (<div className="d-flex justify-content-center mb-3"> <Button color="primary" onClick={loadMore}>Load more</Button> </div>);


  return (
    <div className="App" onScroll={loadMore}>
      <Header changeImageTag={changeImageTag} />
      <Container className="col-10 d-flex flex-column">
        <Row className="text-center justify-content-between">
          { renderImageList }
        </Row>
        {renderLoadMoreButton}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.images.images,
  loading: state.images.loading,
  total: state.images.total,
  pages: state.images.pages
});

const mapDispatchToProps = (disptach) => ({
  fetchImages: (search_key, pageCnt) => disptach(fetchImages(search_key, pageCnt))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);