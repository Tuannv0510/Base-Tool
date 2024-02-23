import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export function LoginPage() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="main-section relative text-sm antialiased bg-[#023071]">
      <div className="min-h-screen text-black dark:text-white-dark">
        <div
          className={`flex min-h-screen items-center justify-start bg-cover bg-center pl-56 bg-[url('../../../public/assets/images/bg.png')]`}
        >
          <div className="m-6 w-full max-w-lg sm:w-[450px]">
            <img src="" alt="" />
            <h1 className="mb-6 text-2xl font-bold text-white mt-6">
              FastStore
            </h1>
            <div className="flex justify-center items-center">
              <Form
                name="normal_login"
                className="login-form w-full"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    className="p-[10px]"
                    prefix={
                      <UserOutlined
                        className="site-form-item-icon"
                        rev={undefined}
                      />
                    }
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    className="p-[10px]"
                    prefix={
                      <LockOutlined
                        className="site-form-item-icon"
                        rev={undefined}
                      />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button w-full p-[10px] h-11 font-semibold bg-[#8000ff]"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
