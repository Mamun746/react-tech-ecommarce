import React, { Component } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
import styled from "styled-components";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "15 days return policy",
        text:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className='py-5'>
        <div className='container'>
          <div className='row'>
            {this.state.services.map((service) => {
              return (
                <div
                  className='col-10 mx-auto col-sm-6 col-md-4 text-center my-3'
                  key={service.id}
                >
                  <div className='service-icon'>{service.icon}</div>
                  <div className='mt-3 text-capitalize '>{service.title}</div>
                  <div className='mt-3'>{service.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: var(--primaryColor);

  .service-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
  p {
    color: var(--darkGray);
  }
`;
