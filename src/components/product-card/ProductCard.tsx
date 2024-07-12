import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  SimpleGrid,
  rem,
  Grid,
  Badge,
} from "@mantine/core";
import Image from "next/image";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface ProductCardProps {
  title:string;
  image: string;
  characteristic: string;
  price: string;
  cuota: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({title, image, characteristic, price, cuota}) => {
  return (
    <Card withBorder mb="xl" shadow="xl">
      <Grid mt='xs' justify="space-between" style={{ zIndex: 1 }}>
        <Badge color="rgba(0, 0, 0, 1)" radius="xs">
          {characteristic}
        </Badge>
        <FavoriteBorderOutlinedIcon />
      </Grid>
      <Card.Section>
        <Image
          src={image}
          alt={"Nike"}
          width={500}
          height={500}
        />
      </Card.Section>
      <Text size="xl" fw={400}>
        {title}
      </Text>
      <Text mt="xs" size="md" fw={700}>
        ${price}
      </Text>
      <Text mt="xs" size="sm" fw={500}>
       {cuota} cuotas sin interes
      </Text>
      <Text mt="xs" size="sm" c="orange" fw={700}>
        ENVIO GRATIS
      </Text>
    </Card>
  );
};
