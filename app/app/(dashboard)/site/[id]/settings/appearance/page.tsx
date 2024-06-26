import prisma from "@/lib/prisma";
import Form from "@/components/form";
import { updateSite } from "@/lib/actions";
export default async function SiteSettingsAppearance({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.site.findUnique({
    where: {
      id: decodeURIComponent(params.id),
    },
  });
  
  return (
    <div className="flex flex-col space-y-6">
      <Form
        title="Thumbnail image"
        description="The thumbnail image for your site. Accepted formats: .png, .jpg, .jpeg"
        helpText="Max file size 50MB. Recommended size 1200x630."
        inputAttrs={{
          name: "image",
          type: "file",
          defaultValue: data?.image!,
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Logo"
        description="The logo for your site. Accepted formats: .png, .jpg, .jpeg"
        helpText="Max file size 50MB. Recommended size 400x400."
        inputAttrs={{
          name: "logo",
          type: "file",
          defaultValue: data?.logo!,
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Carte du restaurant"
        description="Insérez votre carte ici pour générer automatiquement le contenu du site. Formts acceptés: .png, .jpg, .jpeg"
        helpText="Taille max du fichier 50MB."
        inputAttrs={{
          name: "image",
          type: "file",
          defaultValue: data?.image!,
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Font"
        description="Choisissez la police de votre site."
        helpText="Veuillez sélectionner une police."
        inputAttrs={{
          name: "font",
          type: "select",
          defaultValue: data?.font!,
        }}
        handleSubmit={updateSite}
      />
      <Form
          title="Couleur primaire"
          description="Choissisez votre couleur préférée."
          helpText="Couleur de fond de votre site."
          inputAttrs={{
            name: "primaryColor",
            type: "text",
            defaultValue: data?.primaryColor!,
            placeholder: "Changez votre couleur",
          }}
          handleSubmit={updateSite}
        />
        <Form
          title="Couleur secondaire"
          description="Choissisez votre couleur secondaire préférée."
          helpText="Couleur de fond de votre site."
          inputAttrs={{
            name: "secondaryColor",
            type: "text",
            defaultValue: data?.secondaryColor! ,
            placeholder: "Changez votre couleur secondaire",
          }}
          handleSubmit={updateSite}
        />
      <Form
        title="404 Page Message"
        description="Message to be displayed on the 404 page."
        helpText="Please use 240 characters maximum."
        inputAttrs={{
          name: "message404",
          type: "text",
          defaultValue: data?.message404!,
          placeholder: "Blimey! You've found a page that doesn't exist.",
          maxLength: 240,
        }}
        handleSubmit={updateSite}
      />
    </div>
  );
}
