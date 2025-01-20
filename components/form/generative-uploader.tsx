"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { toast } from "sonner";
import Uploader from "./uploader";
import LoadingSpinner from "./loading-spinner";

export default function GenerativeUploader({
  defaultValue,
  name,
}: {
  defaultValue: string | null;
  name: "image" | "logo";
}) {
  const aspectRatio = name === "image" ? "aspect-video" : "aspect-square";

  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({
    [name]: defaultValue,
  });
  const [dragActive, setDragActive] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleUpload = async (file: File | null) => {
    if (file) {
      if (file.size / 1024 / 1024 > 50) {
        toast.error("File size too big (max 50MB)");
      } else if (
        !file.type.includes("png") &&
        !file.type.includes("jpg") &&
        !file.type.includes("jpeg")
      ) {
        toast.error("Invalid file type (must be .png, .jpg, or .jpeg)");
      } else {
        const reader = new FileReader();
        reader.onload = async (e) => {
          console.log("result upload:" ,e.target?.result);
          const base64Image = e.target?.result as string;
          
          setData((prev) => ({ ...prev, [name]: base64Image }));

          // Déclencher la génération après le téléchargement
          await handleGenerate(base64Image,`Sors moi la data sous cette forme {
  "menu": {
    "restaurant": "string",
    "category": "string",
    "items": [
      {
        "type": "string",
        "burgers": [
          {
            "name": "string",
            "description": "string",
            "price": {
              "sandwich": "string",
              "américain": "string"
            }
          }
        ]
      },
      {
        "type": "string",
        "burgers": [
          {
            "name": "string",
            "price": "string"
          }
        ]
      }
    ]
  }
}`);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleGenerate = async (image: string,prompt:string) => {
    try {
      setIsGenerating(true);
      setGeneratedContent(null);

      // Simulez une génération (par exemple, en appelant une API)
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ image ,prompt}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const result = await response.json();
      console.log("result generate:" ,result);
      setGeneratedContent(result.generatedText); // Stocker le contenu généré
      toast.success("Content generated successfully!");
    } catch (error) {
      toast.error("Failed to generate content.");
      console.error("Error during generation:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <div>
      <label
        htmlFor={`${name}-upload`}
        className={cn(
          "group relative mt-2 flex cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50",
          aspectRatio,
          {
            "max-w-screen-md": aspectRatio === "aspect-video",
            "max-w-xs": aspectRatio === "aspect-square",
          },
        )}
      >
        <div
          className="absolute z-[5] h-full w-full rounded-md"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);

            const file = e.dataTransfer.files && e.dataTransfer.files[0];
            inputRef.current!.files = e.dataTransfer.files; // set input file to dropped file
            handleUpload(file);
          }}
        />
        <div
          className={`${
            dragActive ? "border-2 border-black" : ""
          } absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all ${
            data[name]
              ? "bg-white/80 opacity-0 hover:opacity-100 hover:backdrop-blur-md"
              : "bg-white opacity-100 hover:bg-gray-50"
          }`}
        >
          <svg
            className={`${
              dragActive ? "scale-110" : "scale-100"
            } h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M12 12v9"></path>
            <path d="m16 16-4-4-4 4"></path>
          </svg>
          <p className="mt-2 text-center text-sm text-gray-500">
            Drag and drop or click to upload.
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            Max file size: 50MB
          </p>
          <span className="sr-only">Photo upload</span>
        </div>
        {data[name] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data[name] as string}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
        )}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          id={`${name}-upload`}
          ref={inputRef}
          name={name}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => {
            const file = e.currentTarget.files && e.currentTarget.files[0];
            handleUpload(file);
          }}
        />
      </div>
    </div>
      
      {isGenerating && <LoadingSpinner />}
      {generatedContent && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <h4 className="font-bold">Generated Content:</h4>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
}
