const getItemService = async (id = 1) => {
    try {
      const response = await fetch(
        `https://617f6aa3055276001774fa8b.mockapi.io/api/v1/productos/${id}`,
        {}
      ).then((r) => r.json());
      return response;
    } catch (error) {
      console.log(`ERROR OBTENIENDO ITEM CON ID:${id} `);
    }
  
    return {};
  };
  
  export const getAllItemsService = async () => {
    try {
      const response = await fetch(
        "https://617f6aa3055276001774fa8b.mockapi.io/api/v1/productos",
        {}
      ).then((r) => r.json());
      return response;
    } catch (error) {
      console.log("Error OBTENIENDO TODOS LOS ITEMS");
    }
  };
  
  export default getItemService;