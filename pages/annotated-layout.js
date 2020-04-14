import React, { Component } from "react";
import {
  Card,
  Layout,
  Page,
  Button,
  Form,
  FormLayout,
  Stack,
  TextField,
  SettingToggle,
  TextStyle,
} from "@shopify/polaris";

class AnnotatedLayout extends Component {
  state = {
    discount: "10%",
    enabled: false,
  };
  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log("submission", this.state);
  };
  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };
  handleToggle = () => {
    this.setState(({ enabled }) => {
      return { enabled: !enabled };
    });
  };
  render() {
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? "Disable" : "Enable";
    const textStatus = enabled ? "enabled" : "disabled";
    return (
      <div>
        <Page>
          <Layout>
            <Layout.AnnotatedSection
              title="Default discount"
              description="Add a product to Sample App, it will automatically be discount"
            >
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={discount}
                      onChange={this.handleChange("discount")}
                      label="Discount percentage"
                      type="discount"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit>
                        Save
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Price updates"
              description="Temporarily disable all Sample App price updates"
            >
              <SettingToggle
                action={{
                  content: contentStatus,
                  onAction: this.handleToggle,
                }}
                enabled={enabled}
              >
                This setting is{" "}
                <TextStyle variation="strong">{textStatus}</TextStyle>.
              </SettingToggle>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      </div>
    );
  }
}

export default AnnotatedLayout;
