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

const brandsStore: string[] = ["Dell", "HP", "IBM", "Lenovo"];
const screenSizeOptions: number[] = [19, 24, 27, 32];

const InventoryForm = () => {
  // Form States
  const [productNumber, setProductNumber] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | null>(null);
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

  useEffect(() => {
    formValidator();
    console.log(form);
  }, [form]);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "100vw",
          bgcolor: "#000",
        }}
      >
        <Box mb={2}>
          <Typography fontSize="2rem" fontWeight={700} color="#FFF">
            Add New Item
          </Typography>
        </Box>

        <Box component="form">
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

            <Button variant="contained" disabled={filledForm}>
              Add Item
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default InventoryForm;
