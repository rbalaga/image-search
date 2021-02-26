import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap"
import { searchIcon } from "./icons";

const Header = (props) => {

  const renderInputGroup = <div>Enter to search {searchIcon} </div>;

  return <header className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
  <p className="h5 my-0 me-md-auto fw-normal">Image search</p>
  <nav className="col-9 my-md-0 me-md-9">
    <InputGroup>
      <Input disabled={props.loading} type="text" placeholder="Search image here..." onKeyUp={props.changeImageTag} />
      <InputGroupAddon addonType="append">
        <InputGroupText>
          { props.loading ? "Searching..." : renderInputGroup}
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </nav>
</header>
};

export default Header;