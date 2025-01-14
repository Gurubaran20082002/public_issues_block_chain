import { useRef, useState } from "react";
import {
  Button,
  Input,
  ProfileUploader,
  Spinner,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@/components/client";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import classNames from "classnames";
import { isValidEmail } from "@/utils/validation";
import { checkRegisteredEmail, signupUser } from "@/services/api";
import { extractFields } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import Web3 from "web3";
const CRED = "cred";
const INFO = "info";

const SignupForm = () => {
  const [tab, setTab] = useState(CRED);
  const [init, setInit] = useState(true);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const [checkAvailability, setCheckAvailability] = useState({});
  const [formStatus, setFormStatus] = useState({});
  const [userAddress, setUserAddress] = useState(null); 

  
  const credTabRef = useRef(null);
  const infoTabRef = useRef(null);
  const router = useRouter();
  const loginUser = useUserStore((state) => state.loginUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUploadProfile = (image) => {
    setFormData({ ...formData, image });
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
  };

  const handleUploadError = (message) => {
    setError((prevState) => ({ ...prevState, image: message }));
  };

  const handleValidateEmail = () => {
    if (formData?.email) {
      if (!isValidEmail(formData?.email)) {
        setError((prevState) => ({ ...prevState, email: "Invalid email" }));
        return;
      } else {
        setError((prevState) => ({ ...prevState, email: null }));
      }
    } else {
      setError((prevState) => ({ ...prevState, email: "Required" }));
      return;
    }

    checkRegisteredEmail({
      email: formData.email,
      onSubmit: () =>
        setCheckAvailability((prevState) => ({ ...prevState, loading: true })),
      onSuccess: () => {
        setCheckAvailability((prevState) => ({ ...prevState, loading: false }));
        setError((prevState) => ({
          ...prevState,
          email: "Email already taken",
        }));
      },
      onFailed: ({ status }) => {
        if (status === 404) {
          setCheckAvailability((prevState) => ({
            ...prevState,
            loading: false,
            available: true,
          }));
        } else {
          setCheckAvailability((prevState) => ({
            ...prevState,
            loading: false,
            available: false,
          }));
          setError((prevState) => ({
            ...prevState,
            email: "Server error: Failed to check",
          }));
        }
      },
    });
  };

  const handleValidateRquired = (e) => {
    const { value, name } = e.target;
    if (!value) {
      setError((prevState) => ({ ...prevState, [name]: "Required" }));
    } else {
      setError((prevState) => ({ ...prevState, [name]: null }));
    }
  };

  const handleValidateMatch = (e) => {
    const { value, name } = e.target;
    if (value !== formData.password) {
      setError((prevState) => ({ ...prevState, [name]: "Password mismatch" }));
    } else {
      setError((prevState) => ({ ...prevState, [name]: null }));
    }
  };

  const handleChangeTab = (tab) => {
    if (init) {
      setInit(false);
    }
    setTab(tab);
  };

  const handleValidateCred = () => {
    if (!checkAvailability.available) {
      handleValidateEmail();
    }
    const hasError =
      error.email ||
      error.password ||
      error.confirmPassword ||
      !checkAvailability.available;
    const isEmpty =
      !formData.email || !formData.password || !formData.confirmPassword;

    if (isEmpty || hasError || checkAvailability.loading) return;
    infoTabRef.current.click();
  };

  const handleValidateInfo = () => {
    const hasError = error.firstName || error.lastName || error.userAddress;
    const isEmpty =
      !formData.firstName ||
      !formData.lastName ||
      !formData.userAddress;
  
    if (isEmpty || hasError) return;
  
    const userData = extractFields(
      formData,
      "email password image position firstName middleName lastName userAddress"
    );
  
    signupUser({
      userData,
      onSubmit: () =>
        setFormStatus((prevState) => ({
          ...prevState,
          loading: true,
          error: null,
        })),
      onSuccess: (data) => {
        setFormStatus((prevState) => ({
          ...prevState,
          submitted: true,
        }));
        loginUser(data);
        router.push("/dashboard");
      },
      onFailed: ({ data }) => {
        setFormStatus((prevState) => ({
          ...prevState,
          loading: false,
          submitted: false,
          error: data.error,
        }));
      },
    });
  };

  const detectProvider = async () => {
    if (window.ethereum) {
      return window.ethereum;
    } else if (window.web3) {
      return window.web3.currentProvider;
    } else {
      throw new Error('MetaMask not detected.');
    }
  };

  // Function to connect with MetaMask and retrieve user's Ethereum address
  const connectToMetaMask = async () => {
    try {
      const provider = await detectProvider();
      if (provider) {
        // Request account access
        await provider.request({ method: 'eth_requestAccounts' });
  
        // Create a Web3 instance
        const web3 = new Web3(provider);
  
        // Get user address
        const accounts = await web3.eth.getAccounts();
        setUserAddress(accounts[0]);
        setFormData({ ...formData, userAddress: accounts[0] }); // Add this line to set userAddress in formData
  
        // Now you can interact with MetaMask
  
        const recipientAddress = '0x1Ee85C1D74b41cc895C88c8E59a7c0Fea7Eb5340'; // Replace with the recipient's address
        const amountInWei = web3.utils.toWei('0.8', 'ether'); // Amount in Wei
        const txHash = await web3.eth.sendTransaction({
          from: accounts[0],
          to: recipientAddress,
          value: amountInWei,
        });
        console.log('Transaction hash:', txHash);
      } else {
        console.error('MetaMask not detected.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };
  return (
    <form className="mt-12 flex flex-col gap-4">
      <section>
        <Tabs value={tab}>
          <TabsHeader className="hidden">
            <Tab
              value={CRED}
              ref={credTabRef}
              onClick={() => handleChangeTab(CRED)}
            >
              User Credentials
            </Tab>
         
            <Tab
              value={INFO}
              ref={infoTabRef}
              onClick={() => handleChangeTab(INFO)}
            >
              User Info
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: {
                x: tab === CRED ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: tab === CRED ? 400 : -400,
              },
            }}
          >
            <TabPanel value={CRED}>
              <section className="flex flex-col gap-4">
                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    User Credential
                  </Typography>
               
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email *
                  </Typography>
                  <Input
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                    onBlur={handleValidateEmail}
                    error={error?.email}
                    placeholder="name@mail.com"
                    className={
                      error?.email
                        ? "!border-t-red-200 focus:!border-t-red-900"
                        : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                    }
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {checkAvailability.loading ? (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center gap-2"
                    >
                      <Spinner className="h-4 w-4" /> checking availability...
                    </Typography>
                  ) : error?.email ? (
                    <Typography variant="small" color="red">
                      {error.email}
                    </Typography>
                  ) : (
                    checkAvailability.available && (
                      <Typography
                        variant="small"
                        color="green"
                        className="flex items-center gap-2"
                      >
                        <CheckCircleOutlinedIcon className="h-4 w-4" /> Email is
                        available
                      </Typography>
                    )
                  )}
                </div>

                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Password *
                  </Typography>
                  <Input
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                    onBlur={handleValidateRquired}
                    error={error?.password}
                    placeholder="********"
                    className={
                      error?.password
                        ? "!border-t-red-200 focus:!border-t-red-900"
                        : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                    }
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {error?.password && (
                    <Typography variant="small" color="red">
                      {error.password}
                    </Typography>
                  )}
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Confirm Password *
                  </Typography>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData?.confirmPassword}
                    onChange={(e) => {
                      handleChange(e);
                      handleValidateMatch(e);
                    }}
                    error={error?.confirmPassword}
                    placeholder="********"
                    className={
                      error?.confirmPassword
                        ? "!border-t-red-200 focus:!border-t-red-900"
                        : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                    }
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    disabled={!formData?.password}
                  />
                  {error?.confirmPassword && (
                    <Typography variant="small" color="red">
                      {error.confirmPassword}
                    </Typography>
                  )}
                </div>
              </section>
            </TabPanel>
            <TabPanel value={INFO} className={classNames({ hidden: init })}>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="mb-4 font-medium"
              >
                User Info
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Profile Photo
              </Typography>
              <ProfileUploader
                className="mb-4"
                handleFile={handleUploadProfile}
                onDelete={handleRemoveImage}
                onError={handleUploadError}
              />
              {error?.image && (
                <Typography variant="small" color="red">
                  {error.image}
                </Typography>
              )}
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Full Name
              </Typography>
              <section className="flex flex-col gap-2">
                <Input
                  placeholder="Position"
                  name="position"
                  value={formData?.position}
                  onChange={handleChange}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Input
                  placeholder="First Name *"
                  name="firstName"
                  value={formData?.firstName}
                  onChange={handleChange}
                  onBlur={handleValidateRquired}
                  error={error?.firstName}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {error?.firstName && (
                  <Typography variant="small" color="red">
                    {error.firstName}
                  </Typography>
                )}
                <Input
                  placeholder="Middle Name"
                  name="middleName"
                  value={formData?.middleName}
                  onChange={handleChange}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Input
                  placeholder="Last Name *"
                  name="lastName"
                  value={formData?.lastName}
                  onChange={handleChange}
                  onBlur={handleValidateRquired}
                  error={error?.lastName}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {error?.lastName && (
                  <Typography variant="small" color="red">
                    {error.lastName}
                  </Typography>
                )}
              <Button onClick={connectToMetaMask}>Connect with MetaMask</Button>
                {userAddress && (
                  <Typography variant="small" color="green">
                    Your Ethereum address: {userAddress}
                  </Typography>
                )}
              </section>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </section>
      <Button
        size="lg"
        className="flex items-center justify-center gap-2"
        disabled={checkAvailability?.loading || formStatus?.loading}
        onClick={tab === CRED ? handleValidateCred : handleValidateInfo}
      >
        {tab === CRED ? "Validate" : "Sign Up"}
        {(checkAvailability?.loading || formStatus?.loading) && (
          <Spinner className="h-4 w-4" />
        )}
      </Button>
      {/* Button to connect with MetaMask */}
      
      <Typography
        variant="small"
        color={formStatus?.submitted ? "green" : "red"}
      >
        {formStatus?.submitted
          ? "User registered successfully"
          : formStatus.error}
      </Typography>
    </form>
  );
};

export default SignupForm;
