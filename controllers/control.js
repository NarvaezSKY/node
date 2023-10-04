import datos from "../models/model.js";

export const stockdatos = async (req,res)=>{
    try{
        const apdices = await datos.findAll();
        res.json(apdices);
    }catch(error){
        res.json({message: error.message})

    }
}

export const getApdz = async (req,res)=>{
    try{
        const { id } = req.params;
        const apdices = await datos.findAll({where: { id: id }})
        
        res.json(apdices);
    }catch(error){
        res.json({message: error.message})
    }
}

export const createApdz=async(req,res)=>{
    try{
        await datos.create(req.body)
        res.json({
            message:"creado rey"
        })
    } catch(error){
        res.json({message:error.message})
    }
}

export const updateApdz = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = await datos.update(req.body, {
        where: { id: id },
      });
      
      if (updatedData[0] === 1) {
        res.json({ message: "Datos actualizados exitosamente" });
      } else {
        res.status(404).json({ message: "No se encontraron datos para actualizar" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const eliminar = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRows = await datos.destroy({
        where: { id: id },
      });
  
      if (deletedRows === 1) {
        res.json({ message: "Datos eliminados exitosamente" });
      } else {
        res.status(404).json({ message: "No se encontraron datos para eliminar" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };