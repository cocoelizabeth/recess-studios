// import { getSalesChannelToken } from '@commercelayer/js-auth';

// const token = await getSalesChannelToken({
//     clientId: 'ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0',
//     endpoint: 'https://recess-studios.commercelayer.io',
//     scope: 'market:10564'
//   })
import { useState, useEffect } from "react";
import {
  getSalesChannelToken,
  getCustomerToken,
  getIntegrationToken,
  authorizeWebapp,
  getWebappToken,
} from "@commercelayer/js-auth";

function useAuthToken() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await getSalesChannelToken({
          clientId: "ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0",
          endpoint: "https://recess-studios.commercelayer.io",
          scope: "market:10564",
        });
        setToken(response.accessToken);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { token, isLoading, isError };
}

export default useAuthToken;