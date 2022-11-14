import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IInventoryFormPayload } from "../interfaces/IInventory";
import MonitorsTable from "./MonitorsTable";

export const brandsStore = ["Dell", "HP", "IBM", "Lenovo"] as const;
const screenSizeOptions = [19, 24, 27, 32] as const;

const InventoryForm = () => {
  // Form States
  const [productNumber, setProductNumber] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [monitorsList, setMonitorsList] = useState<
    Array<IInventoryFormPayload>
  >([]);
  const [filledForm, setFilledForm] = useState(false);

  // Form Utils
  const form: IInventoryFormPayload = {
    productNumber: productNumber,
    brand: brand,
    screenSize: screenSize,
    price: price,
    quantity: quantity,
  };

  const formValidator = () => {
    const validation = Object.values(form).includes(null);
    setFilledForm(validation);
    return validation;
  };

  const cleanForm = () => {
    setProductNumber(null);
    setBrand(null);
    setScreenSize(null);
    setPrice(null);
    setQuantity(null);
  };

  const handleSubmit = (form: IInventoryFormPayload) => {
    setMonitorsList([...monitorsList, form]);
  };

  useEffect(() => {
    formValidator();
  }, [form]);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          bgcolor: "#000",
          paddingTop: 5,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ paddingBottom: 2 }}>
          <Typography fontSize="2rem" fontWeight={700} color="#FFF">
            Add New Item
          </Typography>
        </Box>

        <Box component="form" onSubmit={() => handleSubmit(form)}>
          <Stack
            spacing={4}
            sx={{
              backgroundColor: "#FFF",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <FormControl>
              <TextField
                value={productNumber}
                label="Product Number"
                type="text"
                onChange={(e) => setProductNumber(e.target.value)}
                required
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="brand-label">Brand</InputLabel>
              <Select
                value={brand}
                label="Brand"
                labelId="brand-label"
                onChange={(e) => setBrand(e.target.value)}
                required
              >
                {brandsStore.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="screenSize-label">Screen Size</InputLabel>
              <Select
                value={screenSize}
                label="Screen Size"
                onChange={(e) => setScreenSize(e.target.value as number)}
                labelId="screenSize-label"
                required
              >
                {screenSizeOptions.map((screenSize) => (
                  <MenuItem key={screenSize} value={screenSize}>
                    {screenSize}"
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="price-label">Price</InputLabel>
              <OutlinedInput
                id="price-label"
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="quantity-label">Quantity</InputLabel>
              <OutlinedInput
                id="quantity-label"
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </FormControl>

            <Button
              variant="contained"
              disabled={filledForm}
              // type="submit"
              onClick={() => {
                setMonitorsList([...monitorsList, form]);
                cleanForm();
              }}
            >
              Add Item
            </Button>
          </Stack>
        </Box>

        <MonitorsTable monitorsList={monitorsList} />
      </Stack>
    </>
  );
};

export default InventoryForm;
