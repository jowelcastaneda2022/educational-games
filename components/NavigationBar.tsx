import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faSearch,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as actionSearch from "../redux/actions/actionSearch";
import { bindActionCreators } from "@reduxjs/toolkit";

export default function NavigationBar() {
  const router = useRouter();
  const cartProducts = useSelector((state: any) => state.cartProducts);
  const [loginEmail, setLoginEmail] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [searchPlayer, setSearchPlayer] = useState('');
  const dispatch = useDispatch();
  const { addSearchPlayer, clearSearch } = bindActionCreators(actionSearch, dispatch);


  useEffect(() => {
    setLoginEmail(localStorage.getItem('email'))
  }, [])

  useEffect(() => {
    let totalQuantity = 0;
    cartProducts?.forEach((product) => {
      totalQuantity = totalQuantity + parseInt(product.quantitySelected)
    });
    setTotalQuantity(totalQuantity)
  }, [cartProducts]);

  useEffect(() => {
    if (searchPlayer == "") {
      clearSearch()
    }
  }, [searchPlayer]);

  const handleSearch = (e) => {
    e.preventDefault();
    addSearchPlayer(searchPlayer)
  }

  const logout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    auth.signOut();
    localStorage.removeItem('email')
    localStorage.removeItem('userId')
    router.push('/login')
  };

  const checkUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!loginEmail) {
      router.push('/login')
    } else {
      router.push('/profile')
    }
  };


  return (
    <Navbar bg="light" expand="lg" className="py-sm-2" id="myNavbar">
      <Container>
        <Link
          href="/"
          className="navbar-brand order-lg-0 col-md-6 col-lg-3"
        >
          <Image
            src="/title.png"
            alt="contact"
            width="100"
            height="90"
          />
        </Link>

        <div className="d-flex nav-btns order-lg-2">
          <Link href="/cart" className="btn position-sticky d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUser} height={20} />
          </Link>
          <Link href="/profile" className="btn position-sticky" onClick={checkUser}>
            <FontAwesomeIcon icon={faMessage} height={20} />
            <span className="nav-btn-label"> Profile </span>
          </Link>
          {loginEmail &&
            <Link href="/login" className="btn position-sticky" onClick={logout}>
              <FontAwesomeIcon icon={faSignOut} height={20} />
            </Link>
          }
        </div>


        <div id="searchbar" className="order-lg-1">
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              className="w-100"
              placeholder="Search here..."
              aria-label="Search"
              value={searchPlayer}
              onChange={(e) => setSearchPlayer(e.target.value)}
            />
            <div className="nav-btns">
              <Button
                className="btn position-relative m-0"
                onClick={handleSearch}
                type="button"
              >
                <FontAwesomeIcon icon={faSearch} height={20} />
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
}
