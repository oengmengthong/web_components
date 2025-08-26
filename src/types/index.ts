export interface ComponentData {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  props?: string;
}

export interface Category {
  name: string;
  components: ComponentData[];
}